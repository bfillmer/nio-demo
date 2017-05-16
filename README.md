# nio demo

Mini-dashboard to view streaming information related to a fictional data coming from a store of sorts.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Commands

```bash
yarn # Same as npm install
yarn start # Dev server, same as npm start
yarn build # Create production build, same as npm run build
yarn test # Run jest tests, same as npm test
```

## Notes

* So many optimizations left out, data streams in fast and there's a lot of it. In particular the statistics would get pretty sluggish if you leave this running for any length of time.
* Data is definitely not normalized, nor any ids to work with, which would help simplify our stat calculations and such. Generally would optimize things.
* Lack of cached data or an initial dataset makes the start-up of the app look a little odd. Looks better as more data gets into the system.
* Array work on the stream data with the awkward data structures made doing a simple sorted list of popular items unfeasible without throttling the data. Settled on a tag map type concept instead.
* Haven't really tested the responsiveness of this thing, no time.
* Would love to do something involving a list of the latest shoppers.
