
import { SplitScreen } from './Layout/SplitScreen'

const LeftComponent = () => <h1 style={{ backgroundColor: 'green' }}>Left</h1>;
const RightComponent = () => <h1 style={{ backgroundColor: 'red' }}>Right</h1>;

function App() {

  return (
    <SplitScreen
      leftWidth={1}
      rightWidth={2}
    >
      <LeftComponent />
      <RightComponent />
    </SplitScreen>
  )
}

export default App
