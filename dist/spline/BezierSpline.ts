import { translatePath } from './translatePath'
import { getEndAnchor } from './getEndAnchor'
import { mirrorPath } from './mirrorPath'
import { rotatePath } from './rotatePath'
import { BezierPoints } from './BezierPoints'
import { Vec2 } from '../vec2/Vec2'
import { BezierStyleProps } from './BezierStyle'

export class BezierSpline {
  private _paths: BezierPoints[]
  private _stroke: string | null = null
  private _fill: string | null = null

  constructor(paths: BezierPoints[], style?: BezierStyleProps) {
    this._paths = paths
    this._stroke = style?.stroke ?? null
    this._fill = style?.fill ?? null
  }

  get paths(): BezierPoints[] {
    return this._paths
  }

  get stroke(): string | null {
    return this._stroke
  }

  get fill(): string | null {
    return this._fill
  }

  get endAnchor(): Vec2 {
    return getEndAnchor(this._paths)
  }

  public rotate({ center, angle }: { center: Vec2, angle: number }): BezierSpline {
    return new BezierSpline(rotatePath({ center: center, angle: angle, path: this._paths }), { fill: this._fill, stroke: this._stroke })
  }

  public mirror({ center, angle }: { center: Vec2, angle: number }): BezierSpline {
    return new BezierSpline(mirrorPath({ center: center, angle: angle, path: this._paths }), { fill: this._fill, stroke: this._stroke })
  }

  public translate({ angle, distance }: { angle: number, distance: number }): BezierSpline {
    return new BezierSpline(translatePath({ angle: angle, distance: distance, path: this._paths }), { fill: this._fill, stroke: this._stroke })
  }

}