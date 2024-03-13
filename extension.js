class gum {
  getInfo() {
    return {
      id: 'gumroad',
      name: 'Gumroad',
      blocks: [
        {
          opcode: 'gumroad',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Ask Gumroad - License Key ([ONE]) - Product ID ([TWO])',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'thing'
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'thing'
            }
          }
        }
      ]
    };
  }
  gumroad(args) {
    return fetch('https://api.gumroad.com/v2/licenses/verify', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({"product_id":args.TWO,"license_key":args.ONE})
    }).then(response => response.json()).then(data => {
      if (data.success) {
        return true
      } else {
        return false
      }
    });
  }
  
}

Scratch.extensions.register(new gum());
