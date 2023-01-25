import { Company } from "./Company";
import { CustomMap } from "./customMap";
import { User } from "./User";

const map= new CustomMap('map')
const user = new User()
const company = new Company

map.addMarker(user)
map.addMarker(company)
