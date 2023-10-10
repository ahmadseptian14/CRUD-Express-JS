const dbPool = require('../config/database');

const getAllLegalEntity = () => {
    const query = 'SELECT * FROM legal_entities';
    return dbPool.execute(query)
}

const createNewLegalEntity = (body) => {
    const created_on =  new Date().getTime();
    const query = ` INSERT INTO legal_entities (pic_name, pic_email, pic_position, company_name, company_mobile, company_npwp, company_address, created_on)
                    VALUES ('${body.pic_name}', '${body.pic_email}', '${body.pic_position}', '${body.company_name}', '${body.company_mobile}',  '${body.company_npwp}', '${body.company_address}', '${created_on}')`;
    return dbPool.execute(query)
}

const updateLegalEntity = (body, id) => {
    const query = ` UPDATE users
                    set name='${body.name}', email='${body.email}', address='${body.address}'
                    WHERE id=${id}`;
    return dbPool.execute(query)
}

const deleteUser = (id) => {
    const query = `DELETE FROM users WHERE id=${id}`;
    return dbPool.execute(query)
}

module.exports = {
    getAllLegalEntity,
    createNewLegalEntity,
    updateLegalEntity,
    deleteUser
}
