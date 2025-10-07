# Swarm API Sample

A NestJS project powered by an intelligent swarm of AI agents with persistent memory capabilities.

## Overview

This project leverages a collaborative swarm of AI agents. Each agent has memory persistence, allowing them to maintain context and share knowledge across sessions.

### How It Works

The project uses a swarm-based architecture where:

- **Multiple AI agents** collaborate to complete development tasks
- **Persistent memory** ensures agents remember previous work and decisions
- **Task distribution** happens automatically based on agent specialization
- **Knowledge sharing** occurs through shared memory storage

Simply describe your task in the `prompt.txt` file, run `yarn task`, and watch as the swarm of agents collaborates to implement it.

## Agent System

### Available Agents

The system dynamically spawns specialized agents based on task requirements:

- **Architect Agent**: Designs system architecture and high-level solutions
- **Backend Developer Agent**: Implements API endpoints, services, and business logic
- **Frontend Developer Agent**: Creates UI components and client-side functionality
- **Database Agent**: Manages data models, migrations, and queries
- **Testing Agent**: Writes unit tests, integration tests, and E2E tests
- **Documentation Agent**: Creates and maintains documentation
- **DevOps Agent**: Handles deployment, CI/CD, and infrastructure
- **Code Reviewer Agent**: Reviews code quality and suggests improvements

### Memory System

Agents store their state and knowledge in:
- `memory/agents/`: Individual agent memory storage
- `memory/sessions/`: Session-specific data
- `coordination/`: Inter-agent coordination data

## Quick Start

### Using the Agent Swarm

1. **Define your task** in `prompt.txt`:
   ```
   Create a new REST API endpoint for managing users...
   ```

2. **Run the swarm**:
   ```bash
   yarn task
   ```

3. **Watch the agents work**: The swarm will automatically:
   - Analyze the task
   - Spawn necessary specialized agents
   - Distribute work among agents
   - Implement the solution
   - Test and validate the implementation

### Additional Options

You can pass additional flags to the swarm:
```bash
yarn task --help              # Show available options
yarn task --no-auto-spawn     # Disable automatic agent spawning
yarn task --no-verbose        # Reduce output verbosity
```

## Running the NestJS Application

### Prerequisites

- Node.js (v22 or higher)
- Yarn package manager

### Installation

```bash
yarn install
```

### Development

```bash
# Start in development mode
yarn start

# Start with hot-reload (watch mode)
yarn start:dev

# Start with debugging enabled
yarn start:debug
```

The application will be available at `http://localhost:3000`

### Production

```bash
# Build the project
yarn build

# Run in production mode
yarn start:prod
```

### Testing

```bash
# Run unit tests
yarn test

# Run unit tests in watch mode
yarn test:watch

# Run E2E tests
yarn test:e2e

# Generate test coverage report
yarn test:cov
```

### Code Quality

```bash
# Format code
yarn format

# Lint and fix issues
yarn lint
```

## Project Structure

```
├── coordination/         # Agent coordination and orchestration
│   ├── memory_bank/     # Shared memory storage
│   ├── orchestration/   # Task distribution logic
│   └── subtasks/        # Decomposed task tracking
├── memory/              # Agent memory system
│   ├── agents/          # Individual agent memories
│   └── sessions/        # Session data
├── scripts/             # Utility scripts
│   └── run-claude-flow.mjs  # Agent swarm launcher
├── src/                 # NestJS application source
├── test/                # Test files
├── prompt.txt           # Task definition for agents
└── README.md           # This file
```

## How the Swarm Works

1. **Task Input**: You define tasks in `prompt.txt`
2. **Orchestration**: The main orchestrator analyzes the task complexity
3. **Agent Spawning**: Specialized agents are spawned based on requirements
4. **Collaboration**: Agents work together, sharing context through memory
5. **Implementation**: Code is written, tested, and validated
6. **Persistence**: All agent learnings are saved for future tasks

## Resources

- [NestJS Documentation](https://docs.nestjs.com)
- [Claude-Flow Documentation](https://github.com/anthropics/claude-flow)
- [Project Issues](https://github.com/pauloluan/swarm-api-sample/issues)

## License

This project is [MIT licensed](LICENSE).

## Author

**Paulo Luan** - Creator and maintainer of this project
