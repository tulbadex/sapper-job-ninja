import { jobs } from './_data.js';

export function get(req, res, next){
    res.end(JSON.stringify(jobs));
}

export function post(req, res, next){
    const { title, salary, details } = req.body;
    res.end(JSON.stringify(jobs));
}