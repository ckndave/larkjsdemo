const { Token, Tree, Transformer } = require('../json_grammer');

class JsonReplaceValueTransformer extends Transformer {
    //with_meta = true

    constructor() {
        super(true);
    }

    // def __init__(self, with_meta: bool = False):
    //     """
    //     :param with_meta: If set to true then adds `__start_line__` and `__end_line__`
    //     parameters to the output dict. Default to false.
    //     """
    //     self.with_meta = with_meta
    //     super().__init__()

    object = (args, ...arg) => {
        let result = {};
        for (let index = 0; index < args.length; index++) {
            const element = args[index];
            result[element[0]] = element[1]
        }
        return result
    }

    body = (args, ...arg) => {
        return args
    }

    list = (args, ...arg) => {
        return args
    }

    dict = (args, ...arg) => {
        return args
    }

    array = (args, ...arg) => {
        return args
    }

    pair = (args, ...arg) => {
        let keyToken = args[0]
        let valueToken = args[1]
        Token
        return args
    }

    string = (value) => {
        return value[0].value.toString()
    }

    number = (value) => {
        return parseInt(value[0].value)
    }
}

module.exports = {
    JsonReplaceValueTransformer
}