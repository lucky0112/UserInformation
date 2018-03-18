/**
 * Created by abhisheksinghal on 16/03/18.
 */
import _ from 'lodash';

export const isPropertyExists = (object,property) => {
    let isExists = _.has(object,property);
    console.log(isExists);
    return isExists;
};
