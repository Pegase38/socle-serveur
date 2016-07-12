declare const userModel: {
    attributes: {
        name: {
            type: string;
            required: boolean;
        };
        password: {
            type: string;
            required: boolean;
        };
    };
};
export = userModel;
