export const sin = (angle: number) => {
  return Math.sin(angle * Math.PI / 180)
}

export const cos = (angle: number) => {
  return Math.cos(angle * Math.PI / 180)
}

export const asin = (num: number) => {
  return Math.asin(num) * 180 / Math.PI
}

export const acos = (num: number) => {
  return Math.acos(num) * 180 / Math.PI
}

export const atan = (num: number) => {
  return Math.atan(num) * 180 / Math.PI
}

export const sqrt = Math.sqrt

export const pow = Math.pow

export const abs = Math.abs

//余弦定理から長さを求める
export const angleAfromLawOfCosines = ({ a, b, c }: { a: number, b: number, c: number }) => {
  return acos((pow(b, 2) + pow(c, 2) - pow(a, 2)) / (2 * b * c))
}

//正弦定理から長さを求める
export const lengthAfromSineTheorem = ({ angleA, angleB, b }: { angleA: number, angleB: number, b: number }) => {
  return sin(angleA) * b / sin(angleB)
}

//正弦定理から角度を求める
export const angleAfromSineTheorem = ({ a, b, angleB }: { a: number, b: number, angleB: number }) => {
  console.log("angleAfromSineTheorem: ", a * sin(angleB) / b)
  return asin(a * sin(angleB) / b)
}

//角度を正の値かつ0〜360の範囲内に正規化する
export const normalizeAngle = (angle: number) => {
  return (angle % 360 + 360) % 360
}

//鈍角の場合、鋭角を求める
export const takeAcuteAngle = (angle: number) => {
  const normalized = normalizeAngle(angle)
  if (normalized > 180) {
    return 360 - normalized
  }
  return normalized
}