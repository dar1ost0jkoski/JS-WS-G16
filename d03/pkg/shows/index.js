const files = require('../files');
const DATA_SOURCE = `${__dirname}/../../data`;

const getAllShows = async () => {
    try {let data = await files.readData(DATA_SOURCE);
    return data;
    } catch (error) {
        throw error;
    }
};

const getShowById = async (index) => {
    try {
        let data = await files.readData(DATA_SOURCE);
        return data[index];
    } catch (error) {
        throw error
    }
};

const addNewShow = async (show) => {
    try {
        let data = await files.readData(DATA_SOURCE)
        data.push(show);
        await files.writeData(data, DATA_SOURCE);
    } catch (error) {
        throw error;
    }
};

const updateShow = async (index, show) => {
    try {
        let data = await files.readData(DATA_SOURCE);
        let out = data.map((s, i) => {
            if (index === i) {
                s = show;
            }
            return s;
        })
        await files.writeData(out, DATA_SOURCE);
    } catch (error) {
        throw error;           
    }   
};

const partialyUpdateShow = async (index, show) => {
    try {
        let data = await files.readData(DATA_SOURCE);
        let out = data.map((s, i) => {
            if (index === i) {
                s = {
                    ...s,
                    ...show
                }
            }
            return s;
        })
        await files.writeData(out, DATA_SOURCE);
    } catch (error) {
        throw error;           
    }   
};

const removeShow = async (index) => {
    try {
        let data = await files.readData(DATA_SOURCE);
        let out = data.filter((_, i) => index !== i);
        await files.writeData(out, DATA_SOURCE);
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllShows,
    getShowById,
    addNewShow,
    updateShow,
    partialyUpdateShow,
    removeShow
};