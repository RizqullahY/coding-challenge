# Coding Challenges Repository

This repository contains solutions to various coding challenges that I have solved on platforms such as LeetCode, CodeWars, and others.

## Repository Structure
```
/coding-challenges/
|-- leetcode/
|   |-- easy/
|   |-- medium/
|   |-- hard/
|-- codewars/
|   |-- kata-training/
|	|-- 6kyu/
|	|-- 7kyu/
|	|-- 8kyu/
|   |-- tantangan-coding-wpu/
|-- others/
|-- temp/
|-- git-push.sh
|-- git-pull.sh
```

## How to Use
Each folder contains solutions for programming challenges from the respective platform. The classification is based on difficulty levels.

## Provided Scripts
To simplify repository management, the following Bash scripts are available:

| Script Name   | Description                                                                           |
|---------------|---------------------------------------------------------------------------------------|
| `git-push.sh` | Adds, commits, and pushes changes to the repository with an automatic commit message. |
| `git-pull.sh` | Pulls the latest changes from the repository.                                         |

### `git-push.sh`

**Usage:**

Default with datetime "Automatic commit: 2025-03-17 12:07"
```sh
 ./git-push.sh
```
With commit message
```sh
 ./git-push.sh "With commit message"
```

---

### `git-pull.sh`

**Usage:**

Default 
```sh
 ./git-pull.sh
```
With stash changes
```sh
 ./git-push.sh -s
```

## Contributions
If you would like to contribute or provide suggestions, feel free to submit a pull request or open an issue in this repository.

---
Happy coding! 🚀

