Promise.resolve(() => 'niko')
    .then(() => {
        throw new Error("ops");
    })
    .catch((ex) => {
        console.log(ex);
    })
    .then(() => {
        throw new Error("ups");
    })
    .catch((ex) => {
        console.log(ex);
    })
