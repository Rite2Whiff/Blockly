let workspace = null;

function start() {
  workspace = Blockly.inject("blocklyDiv", {
    toolbox: document.querySelector("#toolbox-categories"),
  });
}
Blockly.Blocks["block_type"] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck(null)
      .appendField(
        new Blockly.FieldDropdown([
          ["Oggy", "O"],
          ["Scooby", "S"],
          ["Shaggy", "Sh"],
          ["Bravo", "B"],
        ]),
        "Cartoon"
      )
      .appendField("Select your favourite cartoon ")
      .appendField(
        new Blockly.FieldDropdown([
          ["Red", "Re"],
          ["Green", "Gr"],
          ["Blue", "Bl"],
          ["Yellow", "Ye"],
        ]),
        "Color"
      )
      .appendField("Pick a color");
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["block_type"] = function (block) {
  var dropdown_cartoon = block.getFieldValue("Cartoon");
  var dropdown_color = block.getFieldValue("Color");
  if (dropdown_cartoon === "O") {
    document.querySelector("img").src =
      "https://i.pinimg.com/originals/72/45/fb/7245fb0ca786bb4a98fb8465e437c5bb.jpg";
  }
  if (dropdown_cartoon === "S") {
    document.querySelector("img").src =
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Scooby-Doo.png/150px-Scooby-Doo.png";
  }
  if (dropdown_cartoon === "Sh") {
    document.querySelector("img").src =
      "https://upload.wikimedia.org/wikipedia/en/8/87/ShaggyRogers.png";
  }
  if (dropdown_cartoon === "B") {
    document.querySelector("img").src =
      "https://static.wikia.nocookie.net/johnnybravo/images/b/bb/Johnnyb001.gif/revision/latest?cb=20190421193227";
  }
  if (dropdown_color === "Re") {
    document.body.style.backgroundColor = "red";
  }
  if (dropdown_color === "Gr") {
    document.body.style.backgroundColor = "green";
  }
  if (dropdown_color === "Bl") {
    document.body.style.backgroundColor = "blue";
  }
  if (dropdown_color === "Ye") {
    document.body.style.backgroundColor = "yellow";
  } else return;
};

const runCode = () => {
  window.LoopTrap = 1000;
  Blockly.JavaScript.INFINITE_LOOP_TRAP =
    'if (--window.LoopTrap == 0) throw "Infinite loop".;\n';
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  try {
    eval(code);
  } catch (e) {
    alert(e);
  }
};

const button = document.querySelector("button");
button.addEventListener("click", runCode);
