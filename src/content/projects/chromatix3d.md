---
layout: project
type: project
image: ""
title: "Chromatix: 3D Vinyl Crate & Hi-Fi Lounge"
date: 2026
priority: 6
published: true
labels:
  - Three.js
  - WebGL
  - React
  - Redux
  - SCSS
summary: "An immersive, hardware-accelerated 3D vinyl crate digging and hi-fi listening lounge built with Three.js for Chromatix, bringing tactile album browsing to self-hosted music libraries."
---
<img width= "400px" src="" class="img-thumbnail" >

<hr>

### Overview

While streaming interfaces are efficient, flat grids and dense data tables strip away the tactile joy of flipping through records in a physical shop. For **Chromatix** (a self-hosted music player for Plex and Jellyfin), I built a **3D Record Bin (Crate View)**. It is an interactive, skeuomorphic 3D listening room and crate-digging interface powered by Three.js and WebGL.

The page recreates the sensation of thumbing through physical vinyl sleeves, watching a turntable spin with dynamic tonearm tracking, and reading liner notes, all while seamlessly connected to the player's core playback queue, search, and library management state.

---
### Purpose
I have burned my personal CD collection to MP3 files and stored them on a hard drive, but the experience of finding an album I wanted to listen to and playing it was fairly boring. Other options like PlexAmp work but feel flat. I deeply enjoy the feeling of thumbing through my collection of music and wanted to try and recreate that experience in a web application.

### Key Features

#### 1. Procedural Vinyl Crate & Flipping Physics
- **Asymmetrical Sleeve Pooling**: Manages dozens of visible albums inside an acrylic bin with low memory overhead by recycling dynamic meshes across sliding index windows.
- **Rake & Flip Dynamics**: Records lean back in waiting queues, smoothly pitch forward onto the front acrylic lip as you browse past, and elevate toward the camera when inspected.
- **Synthesized Audio Cues**: Uses the Web Audio API to procedurally generate subtle mechanical clicks and thuds as records flip between stacks.

#### 2. Fully Articulated Hi-Fi Turntable
- **Dynamic Tonearm & Needle Tracking**: The chrome tonearm smoothly lifts off its rest cradle and lowers into the lead-in groove when playback starts. As tracks and the album progress, the needle continuously advances inward across the vinyl grooves to calculate the exact real-time playback position.
- **Tactile Lever & Center Spindle**: An interactive start/stop toggle lever with a glowing jewel indicator, alongside a spinning platter and center label matching the active album art.
- **Now-Spinning Display Easel**: The album currently on the turntable is propped upright on an acrylic easel behind the deck for clear visibility.

#### 3. Real-Time Procedural Gatefold Booklet
- **Dynamic 2D-to-3D Canvas Texture**: Rather than relying on heavy DOM overlays, tracklists and metadata are drawn in real time onto an off-screen HTML5 Canvas mapped directly onto a tilted 3D card.
- **Inertia Drag & Scroll**: Supports track hovering, active playing indicators, and direct click-to-play track selection via raycasting, complete with momentum-based inertial scrolling.



#### 5. Integrated Controls & Performance
- **Hybrid Navigation**: Full keyboard navigation (Arrow keys, PageUp/PageDown, Home/End, Space to play/pause, Enter to play), an A–Z scrub bar, and live search filtering.
- **Paced Render Loop**: Throttles to a frame-paced render cycle that enters an idle sleep state when the scene is static, avoiding unnecessary GPU usage or battery drain.
- **Library Integration**: Fully integrated with Chromatix’s Rematch/Redux global state, multi-attribute sorting (`ActionSort`), and direct triggers for album downloads.

---

### Tech Stack & Architecture

- **Rendering**: Three.js, WebGL, HTML5 Canvas 2D texture generation
- **Frontend Framework**: React 18, React-Redux / Rematch
- **Styling**: SCSS Modules
- **Audio & Media**: Web Audio API, Plex & Jellyfin bridge APIs
