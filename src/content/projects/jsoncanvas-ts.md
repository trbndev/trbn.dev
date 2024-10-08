---
title: "@trbn/jsoncanvas: A TypeScript Library for JSON Canvas"
status: maintenance
tags:
    - jsoncanvas
    - typescript
    - infinite-canvas
    - open-source
    - data-structures
    - web-development
    - digital-whiteboard
    - software-development
    - mit-license
    - canvas-library
    - obsidian
    - frontend-development
    - visualization-tools
    - npm-package
    - developer-tools
---

@trbn/jsoncanvas is a TypeScript implementation of the JSON Canvas specification, designed to facilitate the creation and manipulation of infinite canvas data structures. This library provides developers with a robust toolset for working with the JSON Canvas format, which is an open file format that promotes longevity, readability, interoperability, and extensibility for data generated by infinite canvas applications.

The JSON Canvas format, originally created for Obsidian, allows users to organize information spatially, much like a digital whiteboard. It encourages exploration and creativity, making it a popular choice for various applications. With the .canvas file extension, JSON Canvas files are easy to parse, giving users full ownership over their data.

## Key Features

- **Data Structure Only**: @trbn/jsoncanvas focuses solely on providing a data structure for a canvas. It does not include a rendering engine, allowing developers to integrate it seamlessly into their existing applications.
- **Easy Installation**: You can quickly add @trbn/jsoncanvas to your project using pnpm:
  ```bash
  pnpm install @trbn/jsoncanvas
  ```

## Example Usage

Here’s a quick example of how to use @trbn/jsoncanvas to create a simple canvas with text nodes and connections:

```typescript
import { JSONCanvas } from '@trbn/jsoncanvas';

const canvas = new JSONCanvas();

// Adds a text node to the canvas
canvas.addNode({
  id: 'node1',
  type: 'text',
  text: 'Hello, World!',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
});

// Adds another text node to the canvas
canvas.addNode({
  id: 'node2',
  type: 'text',
  text: 'Hello, World 2!',
  x: 200,
  y: 200,
  radius: 50,
});

// Adds a connection between node1 and node2
canvas.addEdge({
  id: 'edge1',
  fromNode: 'node1',
  toNode: 'node2',
  label: 'Edge 1',
});

// Removes node2 and all connections to it
canvas.removeNode('node2');

// Outputs the canvas as a string
console.log(canvas.toString());
```

## License

@trbn/jsoncanvas is open source and available under the MIT License. It is currently in maintenance mode, meaning it will only receive reported bug fixes moving forward. 

For more information and to access the library, visit the [@trbn/jsoncanvas repository](https://github.com/trbndev/jsoncanvas).
