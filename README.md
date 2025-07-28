
# Tailwind Screen Size

A lightweight component that I created to actively show the current Tailwind screen size of your browser during development.


## Features

- Displays your current screen size
- Actively listens to changes of your viewport size
- Presents the information according to TailwindCSS default breakpoints
- Your screen can be either:
    - xs
    - sm
    - md
    - lg
    - xl
    - 2xl
- Makes it easier to develop responsive layouts according to these breakpoints
- Does not interfere with your layout


## Installation

Using npm:

```npm
  npm install @svenskost/tailwind-screen-size
```
    
## Usage

You can use it anywhere you like, however the best approach is to add it to your global layout or root.

```javascript
import TailwindScreenSize from '@svenskost/tailwind-screen-size'

export default function Layout() {
  return (
    <div>
      <TailwindScreenSize />
      {/* Your app content */}
    </div>
  );
}
```

