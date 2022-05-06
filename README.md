# Judo Timer

This is a timer for the jury table at Judo competitions, to keep times
on the referee's behalf.

## Implemented functionalities

- adjustable timers
- automatic assignment of victory
- *osae komi* timer with automatic assignment of *waza ari* and *ippon*
- scoreboard to keep track of *waza ari*, *ippon* and *shido*
- automatic victory determination for:
	- end of time with score advantage
	- *ippon* or two *waza ari*
	- *kosoko make*
- automatic determination of golden score


## Structure

The project is based on my template for Electron apps with React, TypeScript
and TailwindCSS support, which can be found at
[https://github.com/f-aguzzi/electron-react-typescript-tailwind-template].

The package manager is `yarn`.

The dev server can be started with `yarn start` and the executable can be
built with `yarn package`.
