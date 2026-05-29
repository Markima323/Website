// 鼠标跟随 / 剧情动画的可调参数。改这里就能调手感，不用动逻辑代码。
export const FOLLOW_CONFIG = {
  // 图片在屏幕上显示的宽度（px），高度按原图比例自动缩放
  displayWidth: 140,

  // 跟随的缓动系数 0~1：越小跟得越慢越柔和。需求 1：调小让它慢一点
  followEase: 0.05,

  // Mouse1 朝向翻转的阈值（px/帧）：当它每帧的水平位移超过这个值时才切换左右朝向，
  // 即“从左往右运动就翻转、从右往左运动就翻回”，并避免静止时来回抖动
  flipMoveThreshold: 0.3,

  // Mouse2 冲向 Mouse1 时的朝向死区（px）：水平方向分量超过它才切换左右朝向
  flipDeadzone: 8,

  // 接触鼠标的判定半径（px）：左下角非透明像素离鼠标小于此值算接触
  contactRadius: 8,
  // 接触鼠标后图片随机抖动的幅度（px）
  jitterAmplitude: 5,

  // alpha 阈值（0~255）：大于它才算非透明像素
  alphaThreshold: 16,

  // ---- 剧情阶段参数 ----
  // 阶段1“跟随”持续多久后进入下一段（毫秒）。需求 3：30 秒
  followDurationMs: 3000,

  // 阶段2 Mouse2 冲向 Mouse1 的速度（px/帧，约每秒 60 帧）
  chaseSpeed: 5,

  // 两图非透明像素重叠检测的采样步长（px）：越小越精确但越费性能
  contactSampleStep: 3,

  // 阶段3 合体后等待多久进入离场（毫秒）。需求：3 秒
  mergeWaitMs: 3000,

  // 切换成 Mouse3 时，相对 Mouse1 的原位置向左移动的距离（毫米）
  // CSS 标准：1mm ≈ 3.78px（96px = 1 英寸 = 25.4mm）
  mergeShiftLeftMm: 30,

  // 阶段5 两图一起向右离场的速度（px/帧）
  exitSpeed: 5,

  // ---- 走路效果（移动时 y 轴上下缩放）----
  // 上下缩放幅度（0~1）：0.06 表示在 ±6% 之间起伏
  walkAmplitude: 0.04,
  // 上下缩放的相位速度（rad/ms）：越大摆得越快。0.012 约每秒 1.9 次
  walkSpeed: 0.008,
  // 判定“正在移动”的每帧位移阈值（px）：超过才触发走路缩放，静止时不动
  walkMoveThreshold: 0.3,
}
