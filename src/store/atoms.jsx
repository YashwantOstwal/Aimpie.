import {atom} from 'recoil'
//We can manage the application states effectively within individual components for this project.

const idAtom = atom({
    key:"idAtom",
    default:'0'
})
export default idAtom;