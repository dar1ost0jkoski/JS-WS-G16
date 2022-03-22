const fs = require('fs');

//1
const fileWrite = (file, content) => {
    return new Promise((success, fail) => {
        fs.writeFile(file, content, 'utf8', err => {
            if(err) return fail(err);
            return success();
        });
    });
};

(async () => {
    try {
        let dataa = await fileWrite('test.txt', 'Hola mundo!');
        console.log('data:', dataa)
    } catch (error) {
        console.error(error);
    }
})();

fileWrite('test2.txt', 'Hey whats up?')
    .then(() => {
        console.log('Successfully wrote to file');
    }).catch(err => {
        console.log(err);
    });




// 2
const readFile = (path) => {
    return new Promise((success, fail) => {
        fs.readFile(path, 'utf-8', (data, err) => {
            if(err) return fail(err);
            return success(data);
        });
    });
};

(async () => {
    try {
        await readFile();
        console.log(data1);
    } catch (error) {
        console.error(error);
    };
})();

readFile()
.then((data) => {
    console.log('File read!');
}).catch(err => {
    console.log(err);
});

// 3
const renameFile = (oldFile, newfile) => {
    return new Promise((success, fail) => {
        fs.rename(oldFile, newfile, (err) => {
            if(err) return fail(err);
            return success;
        });
    });
};

(async () => {
    try {
        let file = await renameFile();
        console.log('File renamed.', file)
    } catch (error) {
        console.error(error); 
    };
})();

renameFile()
.then(() => {
    console.log('File renamed!')
}) .catch(err => {
    console.log(err);
});

// 4
const copyFile = (source, destination) => {
    return new Promise((success, fail) => { 
        fs.copyFile(source, destination, err => {
            if(err) return fail(err)
            return success();
        });
    });
};

copyFile()
.then(() => {
    console.log('File copied.')
})
.catch(err => {
    console.error(err);
});

(async () => {
    try {
        let copy = await copyFile();
        console.log('File copied:', copy);
    } catch (error) {
        console.log(error)
    };
})();

// 5
const makeDir = (path) => {
    return new Promise((success, fail) => {
        fs.mkdir(path, err => {
            if(err) return fail(err);
            return success();
        });
    });
};

(async () => { 
    try {
        let directory = await makeDir();
        console.log('Directory created.')
    } catch (error) {
        console.log(error);
    };
})();

makeDir()
.then(() => { 
    console.log('Directory created.');
})
.catch(err => { 
    console.error(err);
});