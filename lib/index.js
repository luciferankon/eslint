/**
 * @fileoverview Console.log should not be used in library
 * @author Ankon
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

// var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports.rules = {
    "no-return": context => ({
        FunctionExpression: function(node) {
            const isReturnPresent = node.body.body.some((node)=>{
                return node.type == "ReturnStatement"
            });
            if(!isReturnPresent) context.report(node,"function without return statement")
        }
    }),
    "commented-code": context => ({
        MemberExpression: function(node) {
            const comments = context.getAllComments();
            comments.forEach(comment => {
                context.report(comment,"commented code");
            })
        }
    })
};
