const fs = require('fs');
const express = require('express');

const api = express();
api.use(express.json);

const readData = (source) => {
    return new Promise((succsess, fail) => {
        fs.readFile(`${source}.json`, 'utf8', (err, data) => {
            if(err) return fail(err);
            let out = JSON.parse(data);
            return succsess(out);
        });
    });
};

const writeData = (data, destination) => {
    return new Promise((succsess, fail) => {
        let out = JSON.stringify(data);
        fs.writeFile(`${destination}.json`, out, err => {
            if(err) return fail(err);
            return succsess();
        });
    });
};

///////////////////////////////
///////////////////////////////

const addPerson = async (firstName, lastName) => {
    try {
        let person = {
            first_name: firstName,
            last_name: lastName
        };
        let data = await readData('./data');
        data.push(person);
        await writeData(person, './data');
    } catch (error) {
        throw error;
    }
};

const updatePerson = async (index, firstName, lastName) => {
    try {
      let data = await readFile("./data");
      let newData = data.map((person, i) => {
        if (index === i) {
          person = {
            firstName: firstName,
            lastName: lastName,
          };
        }
        return person;
      });
      writeFile(newData, "./data");
    } catch (error) {
      console.log(error);
    }
  };


const removePerson = async (index) => {
    try {
        let data = await readData('./data');
        let out = data.filter((_, i) => index !== i);
        await writeData(out, './data');
        } catch(err) {
        throw err;
    }   
};

api.get('/users', async (req, res) => {
    try {
        let data = await readData('./data');
        res.status(200).send(data);   
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error.')
    }
});

api.put("/users/:index", async (req, res) => {
    try {
      const index = Number (req.params.index);
      await updatePerson(index, "Nikola", "Nikolovski");
      return res.status(200).send("Person updated successfully");
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
});

api.listen(10000, err => {
    if(err) return console.log(err);
    console.log('Server started.');
});



