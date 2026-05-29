# 个人网站 (Personal Website)

技术栈：
- **后端**: Java 21 (LTS) + Spring Boot 3 + Maven
- **前端**: React (Vite)
- **数据库**: PostgreSQL
- **容器化**: Docker + Docker Compose
- **反向代理 + HTTPS**: Nginx + Let's Encrypt (Certbot)
- **CI/CD**: GitHub Actions
- **部署**: Hetzner 服务器

---

## 目录结构

```
.
├── backend/                 # Spring Boot 后端
│   ├── src/main/java/...     # 应用代码 + /api/hello 接口
│   ├── pom.xml
│   └── Dockerfile
├── frontend/                # React (Vite) 前端
│   ├── src/                  # App.jsx 等
│   ├── package.json
│   ├── nginx.conf            # 容器内 nginx：提供静态文件并代理 /api
│   └── Dockerfile
├── nginx/conf.d/            # 生产环境反向代理 (HTTPS) 配置
├── docker-compose.yml       # 本地开发
├── docker-compose.prod.yml  # 生产部署 (含 nginx + certbot)
├── .github/workflows/ci.yml # CI
└── .env.example
```

---

## 本地运行 (只需要 Docker)

你本机已安装 Docker + Docker Compose，无需安装 Java / Maven / Node。

```bash
# 1. 准备环境变量
cp .env.example .env

# 2. 构建并启动 (首次会下载依赖，需几分钟)
docker compose up --build
```

启动后访问：

| 地址 | 说明 |
|------|------|
| http://localhost:8081 | 前端网页 |
| http://localhost:8080/api/hello | 后端接口 |
| http://localhost:8080/actuator/health | 后端健康检查 |

页面会显示标题以及后端返回的消息，说明前后端 + 数据库已打通。

停止：`docker compose down`（加 `-v` 可同时删除数据库数据卷）。

---

## 开发模式（热更新 HMR，日常改前端用这个）

生产模式每次改完都要 `--build` 重建。日常调前端用开发模式：改代码保存即生效，
无需重建、无需刷新；Node 跑在容器里，本机不用装。

```bash
docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d
```

访问 **http://localhost:5173**。改 `frontend/` 下任何代码/配置，保存即热更新。

停止开发容器：`docker compose -f docker-compose.dev.yml stop frontend-dev`

> 说明：开发容器用 Vite dev server（见 `docker-compose.dev.yml`）；
> `vite.config.js` 开启了文件轮询，保证 Windows 宿主下热更新可靠。

---

## 不用 Docker 单独运行（可选，需自行安装工具）

后端（需 Maven 或使用 IDE）：
```bash
cd backend
mvn spring-boot:run
```

前端（需 Node 20+）：
```bash
cd frontend
npm install
npm run dev    # http://localhost:5173 ，/api 自动代理到 8080
```

---

## 部署到 Hetzner (生产环境)

1. 在服务器安装 Docker + Docker Compose，拉取本仓库。
2. 创建 `.env` 并设置强密码。
3. 把域名 DNS 的 A 记录指向服务器 IP。
4. 编辑 `nginx/conf.d/website.conf`，把 `example.com` 换成你的域名。
5. 首次申请证书：

```bash
# 先启动（HTTP 可用即可，用于 ACME 验证）
docker compose -f docker-compose.prod.yml up -d --build

# 申请证书（把域名和邮箱换成你自己的）
docker compose -f docker-compose.prod.yml run --rm certbot \
  certonly --webroot -w /var/www/certbot \
  -d example.com -d www.example.com \
  --email you@example.com --agree-tos --no-eff-email

# 重新加载 nginx 以启用 HTTPS
docker compose -f docker-compose.prod.yml exec nginx nginx -s reload
```

证书会由 `certbot` 容器每 12 小时自动续期。

---

## CI/CD

`.github/workflows/ci.yml` 在每次 push / PR 到 `main` 时：
1. 构建并测试后端 (Maven)
2. 构建前端 (npm)
3. 验证 Docker 镜像可以正常构建

可在此基础上添加部署步骤（SSH 到 Hetzner 执行 `docker compose pull && up -d`）。
