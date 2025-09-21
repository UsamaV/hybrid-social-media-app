/**
 * ============================================================================
 * STEP 1.1: Main App Component - Default Vite React Template
 * ============================================================================
 * 
 * CREATED: Project Setup Phase - Step 1.1 (Vite project creation)
 * PURPOSE: Default React component created by Vite template
 * STATUS: Will be replaced with our social media app structure
 * 
 * This file demonstrates fundamental React concepts:
 * 
 * 1. COMPONENT STRUCTURE:
 *    - Function components (modern React approach)
 *    - JSX syntax (HTML-like syntax in JavaScript)
 *    - Component export/import system
 * 
 * 2. REACT HOOKS:
 *    - useState: Manages component state
 *    - State updates trigger re-renders
 *    - Functional state updates (prev => prev + 1)
 * 
 * 3. EVENT HANDLING:
 *    - onClick event handlers
 *    - Arrow functions for inline handlers
 *    - State updates in event handlers
 * 
 * 4. JSX CONCEPTS:
 *    - Fragment syntax (<>...</>) for multiple elements
 *    - className instead of class (JSX difference)
 *    - Self-closing tags (<img />, <br />)
 *    - JavaScript expressions in JSX ({count})
 * 
 * 5. IMPORT SYSTEM:
 *    - ES6 import/export syntax
 *    - Default vs named imports
 *    - Asset imports (images, CSS)
 * 
 * LEARNING NOTES:
 * - This is the default Vite template - we'll replace this with our social media app
 * - Notice how React components are just JavaScript functions that return JSX
 * - State changes automatically trigger UI updates (reactive programming)
 * - JSX is syntactic sugar that gets compiled to React.createElement calls
 */

// ============================================================================
// IMPORTS - Understanding Module System
// ============================================================================

/**
 * React Hook Import
 * - useState: Most fundamental React hook for state management
 * - Named import from 'react' package
 * - Hooks always start with 'use' (React naming convention)
 */
import { useState } from 'react'

/**
 * Asset Imports
 * - reactLogo: Default import from local assets folder
 * - viteLogo: Default import from public folder (note the '/')
 * - These are handled by Vite's asset pipeline
 */
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

/**
 * CSS Import
 * - Imports CSS file that will be processed by Vite
 * - CSS is scoped to this component (CSS Modules behavior)
 * - Styles are automatically injected into the page
 */
import './App.css'

// ============================================================================
// COMPONENT DEFINITION - Understanding React Components
// ============================================================================

/**
 * App Component - Main application component
 * 
 * CREATED: Step 1.1 - Vite template creation
 * PURPOSE: Root component of our React application
 * 
 * Key React Concepts Demonstrated:
 * 1. Function Component: Modern React approach (vs class components)
 * 2. Component Naming: PascalCase convention
 * 3. Return Statement: Must return JSX or null
 * 4. State Management: Using useState hook
 * 5. Event Handling: onClick event with state update
 * 6. JSX Syntax: HTML-like syntax with JavaScript expressions
 */
function App() {
  /**
   * STATE MANAGEMENT - Understanding React State
   * 
   * useState Hook Breakdown:
   * - count: Current state value (number)
   * - setCount: Function to update state
   * - 0: Initial state value
   * 
   * Why This Matters:
   * - State changes trigger component re-renders
   * - React tracks state changes and updates UI automatically
   * - State is local to this component (component-scoped)
   * - setCount can accept a value or a function (prev => prev + 1)
   */
  const [count, setCount] = useState(0)

  /**
   * JSX RETURN - Understanding JSX Syntax
   * 
   * Key JSX Concepts:
   * 1. Fragment (<>...</>): Groups multiple elements without extra DOM node
   * 2. className: JSX attribute (not 'class' like HTML)
   * 3. Event Handlers: onClick with arrow function
   * 4. JavaScript Expressions: {count} inside JSX
   * 5. Self-closing Tags: <img />, <br /> (must be self-closing in JSX)
   * 6. Conditional Rendering: {condition && <element>}
   * 
   * JSX Compilation:
   * - JSX gets compiled to React.createElement() calls
   * - Babel transforms JSX to JavaScript
   * - Vite handles this compilation automatically
   */
  return (
    <>
      {/* Logo Section - Demonstrates JSX structure */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      {/* Main Heading */}
      <h1>Vite + React</h1>
      
      {/* Interactive Section - Demonstrates state and events */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      
      {/* Footer Section */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

/**
 * EXPORT STATEMENT - Understanding Module Exports
 * 
 * Default Export:
 * - This component is the default export of this module
 * - Can be imported as: import App from './App'
 * - Only one default export per module
 * - Used for main component of a file
 */
export default App
