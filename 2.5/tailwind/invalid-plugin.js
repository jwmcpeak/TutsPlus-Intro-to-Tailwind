module.exports = function({addVariant, e}) {

    addVariant('invalid', ({modifySelectors, separator}) => {
        modifySelectors(({className}) => {
            let newClassName = `invalid${separator}${className}`;

            return `.${e(newClassName)}:invalid`;
        });
    });

};