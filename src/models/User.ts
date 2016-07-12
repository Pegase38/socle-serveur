const userModel = {
    attributes: {
        name: { 
                type: 'string' ,
                required: true
        }, 
        password: { 
                type: 'string',
                required: true
        }
    }
}

export = userModel;