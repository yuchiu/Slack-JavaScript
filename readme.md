# Slack JavaScript

## Objective

- build Slack like chat application with vanila JavaScript
- minimal use of dependencies and frameworks
- component based approach
- recreate "React like" component pattern from scratch
- recreate "Redux like" data management pattern from scratch
- recreate "React Router like" Single Page Routing pattern from scratch

## Getting Started

### Tools & Versions

| Softwares | Versions |
| --------- | -------- |
| npm       | 6.4.1    |
| nodejs    | 10.10.0  |

### Prequisites

- install dependencies

```
cd Slack-JavaScript
npm install
```

### Bundle Client with Webpack

- bundle files with webpack and watch for changes  
  bundled files will be output to ./dist

```
npm run webpack:watch
```

### Serving application

- run nodemon to serve application and watch for changes  
  application will be serving on http://localhost:3030

```
npm run server:watch
```
