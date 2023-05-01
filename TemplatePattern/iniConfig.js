import { ConfigTemplate } from "./configTemplate";
import ini from 'ini';

export class IniConfig extends ConfigTemplate {
    _deserialize (data) {
        return ini.parse(data)
    }
    _serialize (data) {
        return ini.stringify(data)
    }
}