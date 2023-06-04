import { useContext, useState } from "react"
import { User, UserContext } from "../contexts/userContext"
import { View, Text, TextInput, TouchableOpacity } from "react-native"

export default function Home() {
  const {users, handleRegisterForm} = useContext(UserContext)
  const [username, setUsername] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const handleSubmitForm = () => {
    setUsername("")
    setEmail("")
    handleRegisterForm({email, username})
  }
  return (
    <View>
      <Text style={{fontSize: 20, marginTop: 50}}>
        Register user
      </Text>
      <TextInput onChangeText={setEmail} style={{marginVertical: 20}} value={email} placeholder="E-mail" />
      <TextInput onChangeText={setUsername} style={{marginBottom: 10}} value={username} placeholder="Username" />
      <TouchableOpacity onPress={handleSubmitForm}><Text>continue</Text></TouchableOpacity>
      <View style={{marginTop: 50}}>
        <Text style={{fontSize: 20}}>
          Registred users
        </Text>
        {users.map((e: User) => <Text>{e.username}: {e.email}</Text>)}
      </View>
    </View>
  )
}
