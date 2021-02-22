import React from "react";
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function referencias() {
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.header}>
          <Text
            style={styles.saudacao1}
            Text
            style={{ color: "#AC8F8F", fontSize: 15 }}
          >
            Boa tarde
          </Text>
          <Text
            style={styles.saudacao2}
            Text
            style={{ color: "#AC8F8F", fontSize: 18, fontWeight: "bold" }}
          >
            Beatriz Japa
          </Text>
          <Image
            source={require('../../assets/avatar1.png')}
            style={{ width: 50, height: 50, marginRight: 15 }}
            resizeMode="contain"
          />
        </View>

        <TouchableOpacity style={styles.btnMenu}>
          <Text style={styles.registerText}>Contas</Text>
          <Text style={styles.registerText}>Saiba Mais</Text>
        </TouchableOpacity>

        <SafeAreaView style={styles.referencias}>
          <View style={styles.perfil1}>
            <Text
              style={{ color: "#AC8F8F", fontSize: 25, fontWeight: "bold", marginLeft:110}}
            >
              Cadernos
            </Text>
          </View>
          <SafeAreaView style={styles.cadernos1}>
            <Text
              style={{
                color: "#FFF",
                fontSize: 20,
                fontWeight: "bold",
                width: 110,
              }}
            >
              Viver bem com o dinheiro que você tem
            </Text>
            <Image
              source={require('../../assets/caderno.png')}
              style={{ width: 60, height: 60, marginRight: 15 }}
              resizeMode="contain"
            />
          </SafeAreaView>
          <SafeAreaView style={styles.blocosalvar}>
            <TouchableOpacity style={styles.btnSalvar}>
              <Text
                style={styles.submitText}
                Text
                style={{ color: "#FFF", fontSize: 15, fontWeight: "bold" }}
              >
                Acesse aqui
              </Text>
            </TouchableOpacity>
          </SafeAreaView>

          <SafeAreaView style={styles.cadernos1}>
            <Text
              style={{
                color: "#FFF",
                fontSize: 20,
                fontWeight: "bold",
                width: 110,
              }}
            >
              Gestão das finanças pessoais
            </Text>
            <Image
              source={require("../../assets/caderno.png")}
              style={{ width: 60, height: 60, marginRight: 15 }}
              resizeMode="contain"
            />
          </SafeAreaView>
          <SafeAreaView style={styles.blocosalvar}>
            <TouchableOpacity style={styles.btnSalvar}>
              <Text
                style={styles.submitText}
                Text
                style={{ color: "#FFF", fontSize: 15, fontWeight: "bold" }}
              >
                Acesse aqui
              </Text>
            </TouchableOpacity>
          </SafeAreaView>

          <View style={styles.perfil1}>
            <Text
              style={{ color: "#AC8F8F", fontSize: 25, fontWeight: "bold", marginLeft:130}}
            >
              Sites
            </Text>
          </View>
          <SafeAreaView style={styles.sites1}>
            <Text
              style={{
                color: "#FFF",
                fontSize: 20,
                fontWeight: "bold",
                width: 110,
              }}
            >
              Serasa Educação Financeira
            </Text>
            <Image
              source={require("../../assets/sites.png")}
              style={{ width: 60, height: 60, marginRight: 15 }}
              resizeMode="contain"
            />
          </SafeAreaView>
          <SafeAreaView style={styles.blocosalvar2}>
            <TouchableOpacity style={styles.btnSalvar2}>
              <Text
                style={styles.submitText}
                Text
                style={{ color: "#FFF", fontSize: 15, fontWeight: "bold" }}
              >
                Acesse aqui
              </Text>
            </TouchableOpacity>
          </SafeAreaView>

          <SafeAreaView style={styles.sites1}>
            <Text
              style={{
                color: "#FFF",
                fontSize: 20,
                fontWeight: "bold",
                width: 110,
              }}
            >
              Como organizar o orçamento familiar - FGV
            </Text>
            <Image
              source={require("../../assets/sites.png")}
              style={{ width: 60, height: 60, marginRight: 15 }}
              resizeMode="contain"
            />
          </SafeAreaView>
          <SafeAreaView style={styles.blocosalvar2}>
            <TouchableOpacity style={styles.btnSalvar2}>
              <Text
                style={styles.submitText}
                Text
                style={{ color: "#FFF", fontSize: 15, fontWeight: "bold" }}
              >
                Acesse aqui
              </Text>
            </TouchableOpacity>
          </SafeAreaView>
          <View style={styles.perfil1}>
            <Text
              style={{ color: "#AC8F8F", fontSize: 25, fontWeight: "bold" , marginLeft:70 }}
            >
              Canais do Youtube
            </Text>
          </View>
          <SafeAreaView style={styles.youtube1}>
            <Text
              style={{
                color: "#FFF",
                fontSize: 20,
                fontWeight: "bold",
                width: 110,
              }}
            >
              NoFront - Empoderamento Financeiro
            </Text>
            <Image
              source={require("../../assets/youtube.png")}
              style={{ width: 60, height: 60, marginRight: 15 }}
              resizeMode="contain"
            />
          </SafeAreaView>
          <SafeAreaView style={styles.blocosalvar3}>
            <TouchableOpacity style={styles.btnSalvar}>
              <Text
                style={styles.submitText}
                Text
                style={{ color: "#FFF", fontSize: 15, fontWeight: "bold" }}
              >
                Acesse aqui
              </Text>
            </TouchableOpacity>
          </SafeAreaView>

          <SafeAreaView style={styles.youtube1}>
            <Text
              style={{
                color: "#FFF",
                fontSize: 20,
                fontWeight: "bold",
                width: 110,
              }}
            >
              GUETONOMIA
            </Text>
            <Image
              source={require("../../assets/youtube.png")}
              style={{ width: 60, height: 60, marginRight: 15 }}
              resizeMode="contain"
            />
          </SafeAreaView>
          <SafeAreaView style={styles.blocosalvar3}>
            <TouchableOpacity style={styles.btnSalvar}>
              <Text
                style={styles.submitText}
                Text
                style={{ color: "#FFF", fontSize: 15, fontWeight: "bold" }}
              >
                Acesse aqui
              </Text>
            </TouchableOpacity>
          </SafeAreaView>

        </SafeAreaView>

        <View style={styles.footer1} />

        <SafeAreaView>
          <View style={styles.footer}>
            <Image
              source={require("../../assets/Home.png")}
              style={{ width: 30, height: 30, marginRight: 15 }}
              resizeMode="contain"
            />

            <Image
              source={require("../../assets/game.png")}
              style={{ width: 30, height: 30, marginRight: 15 }}
              resizeMode="contain"
            />

            <Image
              source={require("../../assets/Vector.png")}
              style={{ width: 30, height: 30, marginRight: 15 }}
              resizeMode="contain"
            />
          </View>
        </SafeAreaView>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FFF",
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 10,
    paddingLeft: 10,
    borderBottomWidth: 3,
    borderColor: "#9AE06F",
  },

  input: {
    width: "90%",
    height: 50,
    marginBottom: 15,
    padding: 10,
    borderRadius: 10,
    borderBottomColor: "#40B63E",
    borderBottomWidth: 5,
  },

  btnSalvar: {
    backgroundColor: "#40B63E",
    width: 120,
    height: 30,
    borderRadius: 7,
    paddingLeft: 28,
    paddingTop: 5,
    marginLeft: 80,
  },

  btnMenu: {
    
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 230,
    paddingLeft: 20,
    marginTop: 10,
  },

  perfil1: {
    marginLeft: 30,
    paddingRight: 10,
    marginTop: 50,
    paddingLeft: 10,
  },

  footer1: {
    backgroundColor: "#778899",
    width: "90%",
    height: 3,
    marginLeft: 18,
    marginTop: 60,
  },

  footer: {
    
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 5,
  },

  cadernos1: {
    backgroundColor: "#7159C1",
    width: 290,
    height: 100,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginLeft: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 20,
    paddingTop: 20,
  },

  blocosalvar: {
    backgroundColor: "#7159C1",
    width: 290,
    height: 50,
    marginLeft: 50,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  sites1:{
    backgroundColor: "#50BC22",
    width: 290,
    height: 100,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginLeft: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 20,
    paddingTop: 20,
  },
  
  blocosalvar2:{
    backgroundColor: "#50BC22",
    width: 290,
    height: 50,
    marginLeft: 50,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  btnSalvar2:{
    backgroundColor: "#7159C1",
    width: 120,
    height: 30,
    borderRadius: 7,
    paddingLeft: 28,
    paddingTop: 5,
    marginLeft: 80,
  },
  youtube1:{
    backgroundColor: "#9E8FD2",
    width: 290,
    height: 100,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginLeft: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 20,
    paddingTop: 20,
  },
  
  blocosalvar3:{
    backgroundColor: "#9E8FD2",
    width: 290,
    height: 50,
    marginLeft: 50,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  }
});
