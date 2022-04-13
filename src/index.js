import './styles/index.scss'

const userStack = {
    language: "JavaScript",
    framework: 'Angular'
}
const user = {
    name: 'User',
    age: '37',
    ...userStack
}
console.log(user)