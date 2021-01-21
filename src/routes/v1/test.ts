import {FastifyInstance} from 'fastify';

export default function (app: FastifyInstance, options, done){
    
    app.get('/create', {}, async (req, res) => {

        const user = await req.pgdb.db.User.create({
            fname: "Moses",
            lname: "Odhis",
            email: "moses@odhis.com"
        })

        res.send(user);

    })


    done();
}