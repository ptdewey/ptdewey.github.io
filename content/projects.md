---
title: "My Projects"
date: 2024-03-13T10:22:17-05:00
---

## [FRC Scouting Database V2](https://github.com/ptdewey/frc-scouting-database-v2)
* A new and improved version of my original scouting database, rewritten in Go to improve performance, ease of automation, reproducibility, expandability, and robustness.
* Like the original system, it reads event and match data from The Blue Alliance API, and uses that data to calculate a variety of statistics chosen to extract hidden insights during the scouting process.
* I also added a discord bot that automatically uploads event insights to the team discord channel, allowing scouts to have quick access to new data during competitions.
* Includes Docker image specifications for quick deployment, and tests to ensure everything is working as intended.
* Written in Go.

## [CUDA Neural Network](https://github.com/ptdewey/cuda-nn)
* A modular feed-forward neural network implementation written in CUDA C++ without any libraries.
* Includes various activation functions (ReLU, Tanh, Sigmoid, Softmax), and a few cost functions (Mean Square Error, Categorical Cross Entropy, Binary Cross Entropy).
* Capable of both binary and multi-class classification problems, as well as regression tasks.

## [FRC Scouting Database](https://github.com/ptdewey/frc-scouting-database)
* A scouting and event predictions database for FIRST Robotics Competition events, using The Blue Alliance API.
* This system reads event match data from The Blue Alliance, and uses it to calculate a variety of useful statistics for use in event scouting.
* Uses statistical modeling methods to estimate team contributions during matches in order to quantitatively rank teams and make predictions.
* Includes an event merging structure that allows data aggregation from many events into a centralized spreadsheet/database.
* It is able to predict match outcomes with around 80% accuracy using current and/or prior data.  
* Written in R, using Tidyverse, dplyr, and ggplot.

## [YankBank-nvim](https://github.com/ptdewey/yankbank-nvim)
* A Neovim plugin that seeks to enhances access to yank (copy) history, by providing a quick-access menu that shows the N most recent yanks to the unnamed and system clipboard registers.

## [knitr-nvim](https://github.com/ptdewey/knitr-nvim)
* A Neovim plugin enabling quick and easy knitting of R and R markdown files with 1 key-press.
* Written in Lua.

## [Linux Dotfiles](https://github.com/ptdewey/dotfiles)
* A collection of configuration files and scripts I use every day on my Linux desktop.
* Contains my Neovim configuration along featuring custom Lua functions I wrote that allow for faster directory traversal and quicker fuzzy finding.
* Includes a quick setup script that allows me to get working on any system in minutes.
* Also includes nix configuration files to allow for better reproducibility across any type of unix system.

## Riverine Flood Prediction
* Built a data processing system for cleaning and merging geographical and time series weather data.
* Developed a flood prediction model for the Roanoke River watershed that achieves 95+% accuracy.
* Written in Python with Numpy, Pandas, GeoPandas, Rasterio, and PyTorch

## [Wes Anderson Palettes](https://github.com/karthik/wesanderson)
* Contributed new color palettes to the popular 'wesanderson' R graphics library.

## [SpotiPy Wrapped](https://github.com/ptdewey/SpotiPy-Wrapped)
* Statistical analysis and visualization of Spotify personal data obtained via request and from the API
* Comes with Jupyter Notebook for quick and easy visualizations
* Includes live playback logging scripts to improve insights
* Written in Python and R
* Utilizes the Spotify API, ggplot, dplyr, Tidyverse, Matplotlib, Pandas, and Jupyter

## [EasyStats](https://github.com/ptdewey/easystats)
* Simple statistical analysis library for Python written in C.
* Created during the VT Hacks X hackathon

