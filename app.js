//initialize the values
const values = { id: "", name: "", years: "" };

//PostAPI function
export const create = (req, res) => {
    try {
        const { id1, id2 } = req.params;
        console.log(req.params);
        res.status(200).json({ msg: `${id1} and ${id2} is created` });
    } catch (e) {
        res.status(501).json({ err: e.message });
    }

}

//GetAPI function
export const read = (req, res) => {
    try {
        const { name, years } = req.body;
        res.status(200).json({ msg: `${name} is ${years} years old` });
    } catch (e) {
        res.status(404).json({ err: e.message });
    }

}

//PutAPI function
export const update = (req, res) => {
    try {
        const { name, years } = req.body;
        values.name = "preethi";
        values.years = "4";
        res.status(200).json({ msg: `${values.name}is ${values.years} years old is the  updated sentence` });
    } catch (e) {
        res.status(500).json({ err: e.message });
    }

}

//DeletAPI function
export const del = (req, res) => {
    try {
        values.name = "";
        values.years = "";
        res.status(200).json({ msg: `The data is deleted` });
    } catch (e) {
        res.status(500).json({ err: e.message });
    }

}

//middleware function
export const mid = (req, res, next) => {
    try {
        const { id } = req.body;
        if (id == 5) {
            next();
        } else {
            res.status(402).json({ msg: `Unauthorized` });
        }
    } catch (e) {
        res.status(500).json({ err: e.message })
    }
}
