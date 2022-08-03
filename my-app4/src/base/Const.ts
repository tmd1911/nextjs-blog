

export function LOG(s: string) {
    console.log("AALOG - "+s);
}

export function ASSERT(b: Boolean) {
    if (!b) {
        console.log("AAASSERT - "+b);
    }
}

