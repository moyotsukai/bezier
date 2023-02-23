# @moyotsukai/bezier (beta)

A tool for drawing bezier curves.   
This library is for React projects in local environments.   
   
# Quick Start
```
npm i @moyotsukai/bezier   
```   
   
```tsx
import Bezier from '@moyotsukai/bezier'

const App: React.FC = () => {
  const path = Bezier.spline({
    start: { x: 100, y: 400 },
    points: [
      {
        end: { eaa: 15, eal: 400 },
        controls: { sca: 30, scl: 100, eca: 45, ecl: 120 }
      }
    ]
  })

  return (
    <Bezier.Root>
      <Bezier.Svg
        splines={[path]}
      />
    </Bezier.Root>
  )
}

export default App
```