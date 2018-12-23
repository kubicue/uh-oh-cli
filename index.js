module.exports = function uh-oh-cli(cmd, options, what) {
  this.cmd = cmd;
  this.options = options;
  this.what = what;
}
var zero = new Command("w", "-h -i", "Display who is logged in and what they are doing");
console.table(zero);
};
