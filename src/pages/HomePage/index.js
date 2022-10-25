import React, { useMemo } from "react";
import { Text, View, SafeAreaView, Pressable, Image } from "react-native";
import { primaryColor, secondaryColor } from "../../styles/Colors";
import { styles } from "./style";
import useController from "./hooks/index";
const X_PLAYER = require("../../assets/cross.png");
const O_PLAYER = require("../../assets/zero.png");
const REPLAY = require("../../assets/replay.png");
const HomePage = () => {
  const { activePlayer, markers, markPosition, resetMarkers } = useController();
  const handleView = useMemo(() => {
    return (
      <SafeAreaView style={styles.body}>
        <View
          style={[
            styles.playerInfo,
            { backgroundColor: activePlayer === "X" ? primaryColor : secondaryColor },
          ]}
        >
          <Text style={styles.playerTxt}>Player {activePlayer}'s turn</Text>
        </View>
        <View style={styles.mainContainer}>
          {/* Top Left Cell */}
          <Pressable
            style={styles.cell_top_left}
            onPress={() => markPosition(0)}
          >
            {markers[0] === "X" && (
              <Image source={X_PLAYER} style={styles.icon} />
            )}
            {markers[0] === "O" && (
              <Image source={O_PLAYER} style={styles.icon} />
            )}
          </Pressable>

          {/* Top Mid Cell */}
          <Pressable
            style={styles.cell_top_mid}
            onPress={() => markPosition(1)}
          >
            {markers[1] === "X" && (
              <Image source={X_PLAYER} style={styles.icon} />
            )}
            {markers[1] === "O" && (
              <Image source={O_PLAYER} style={styles.icon} />
            )}
          </Pressable>

          {/* Top Right Cell */}
          <Pressable
            style={styles.cell_top_right}
            onPress={() => markPosition(2)}
          >
            {markers[2] === "X" && (
              <Image source={X_PLAYER} style={styles.icon} />
            )}
            {markers[2] === "O" && (
              <Image source={O_PLAYER} style={styles.icon} />
            )}
          </Pressable>

          {/* Mid Left Cell */}
          <Pressable
            style={styles.cell_mid_left}
            onPress={() => markPosition(3)}
          >
            {markers[3] === "X" && (
              <Image source={X_PLAYER} style={styles.icon} />
            )}
            {markers[3] === "O" && (
              <Image source={O_PLAYER} style={styles.icon} />
            )}
          </Pressable>

          {/* Mid Mid Cell */}
          <Pressable
            style={styles.cell_mid_mid}
            onPress={() => markPosition(4)}
          >
            {markers[4] === "X" && (
              <Image source={X_PLAYER} style={styles.icon} />
            )}
            {markers[4] === "O" && (
              <Image source={O_PLAYER} style={styles.icon} />
            )}
          </Pressable>

          {/* Mid Right Cell */}
          <Pressable
            style={styles.cell_mid_right}
            onPress={() => markPosition(5)}
          >
            {markers[5] === "X" && (
              <Image source={X_PLAYER} style={styles.icon} />
            )}
            {markers[5] === "O" && (
              <Image source={O_PLAYER} style={styles.icon} />
            )}
          </Pressable>

          {/* Bottom Left Cell */}
          <Pressable
            style={styles.cell_bottom_left}
            onPress={() => markPosition(6)}
          >
            {markers[6] === "X" && (
              <Image source={X_PLAYER} style={styles.icon} />
            )}
            {markers[6] === "O" && (
              <Image source={O_PLAYER} style={styles.icon} />
            )}
          </Pressable>

          {/* Bottom Mid Cell */}
          <Pressable
            style={styles.cell_bottom_mid}
            onPress={() => markPosition(7)}
          >
            {markers[7] === "X" && (
              <Image source={X_PLAYER} style={styles.icon} />
            )}
            {markers[7] === "O" && (
              <Image source={O_PLAYER} style={styles.icon} />
            )}
          </Pressable>

          {/* Bottom Right Cell */}
          <Pressable
            style={styles.cell_bottom_right}
            onPress={() => markPosition(8)}
          >
            {markers[8] === "X" && (
              <Image source={X_PLAYER} style={styles.icon} />
            )}
            {markers[8] === "O" && (
              <Image source={O_PLAYER} style={styles.icon} />
            )}
          </Pressable>
        </View>
        <Pressable style={styles.cancleBTN} onPress={resetMarkers}>
          <Image source={REPLAY} style={styles.cancelIcon} />
        </Pressable>
      </SafeAreaView>
    );
  }, [activePlayer, markers, markPosition]);
  return <>{handleView}</>;
};
export default HomePage;
