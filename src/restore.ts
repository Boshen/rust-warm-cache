import path from "path";
import * as core from "@actions/core";
import * as cache from "@actions/cache";

async function main() {
	if (!cache.isFeatureAvailable()) {
		core.warning("Cache is not available");
		return;
	}

	core.exportVariable("CARGO_INCREMENTAL", 0);

	const paths: string[] = [path.resolve("target")];
	const primaryKey = "v0-warm-main";
	const restoreKeys: string[] = ["v0-warm-main"];
	const restoreKey = await cache.restoreCache(paths, primaryKey, restoreKeys);

	core.info(`Restore key: ${restoreKey}`);
}

main();
