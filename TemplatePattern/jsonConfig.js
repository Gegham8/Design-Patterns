import { ConfigTemplate } from "./configTemplate";

export class JsonConfig extends ConfigTemplate {
    _deserialize (data) {
        return JSON.parse(data); 
    }
    _serialize (data) {
        return JSON.stringify(data, null, ' ');
    }
}