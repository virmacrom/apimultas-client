const urljoin = require ('url-join');
const request = require ('request-promise-native').defaults({json:true});

class MultasResource {
    static multasUrl(resourceUrl){
        const multasServer = (process.env.MULTAS_URL || 'http://localhost:3000/api/v1');
        return urljoin (multasServer, resourceUrl);
    }

    static requestHeaders(){
        const multasKey = (process.env.MULTAS_APIKEY || 'ed588612-3c01-43d5-ac42-2421983d6c0c');
        return {
            apikey: multasKey
        };
    }

    static getAllMultas () {
        const url = MultasResource.multasUrl("/multas");
        const options= {
            headers: MultasResource.requestHeaders()
        }
        return request.get(url, options);
    }

}

module.exports = MultasResource;