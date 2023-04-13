# Rust Warm Cache Action

A GitHub Action that keeps a warm cache for large Rust projects and never handout a cold cache for any of the CI jobs.

This should be akin to local developments where you checkout branches to work on while the `target` directory persists.

This action differentiates [Swatinem/rust-cache](https://github.com/Swatinem/rust-cache) by:

* this caches workspace crates because they still take a significant amount of time to build. [`Swatinem/rust-cache` does not cache workspace crates](https://github.com/Swatinem/rust-cache/issues/37#issuecomment-944697938).
* controls the size of the cache so it does not reach a few gigabytes if the builds are frequent

This action builds upon [actions/cache@v3](https://github.com/actions/cache) so you don't need to learn about the complicated [caching strategies](https://github.com/actions/cache/blob/main/caching-strategies.md).

## Future work

Figure out a way to work with [sccache](https://github.com/mozilla/sccache), as [sccache action](https://github.com/Mozilla-Actions/sccache-action) is not ideal for GitHub actions due to:

* 429 rate limit when run in parallel
* if [Swatinem/rust-cache](https://github.com/Swatinem/rust-cache) is not installed, cargo will still have to download the crates, countering the performance improvement
* too many cache objects (1000+), this may "push out" all the other larger caches because of the 10GB site limit.
