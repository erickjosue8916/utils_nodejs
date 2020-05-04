"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = __importDefault(require("child_process"));
function execCommand(cmd) {
    var exec = child_process_1.default.exec;
    return new Promise(function (resolve, reject) {
        exec(cmd, { maxBuffer: 1024 * 2000 }, function (error, stdout, stderr) {
            if (error)
                console.warn(error);
            resolve(stdout || stderr);
        });
    });
}
exports.default = execCommand;
