const obj = {
    name: 'Alice',
    regularFunc: function() {
      console.log('Regular Function:', this.name);
    },
    arrowFunc: () => {
      console.log('Arrow Function:', this.name);
    },
    greet: function() {
      console.log('Inside greet method - this.name:', this.name);
      this.regularFunc();
      this.arrowFunc();
      const indirectArrowFunc = () => {
        console.log('Indirect Arrow Function:', this.name);
      };
      indirectArrowFunc();
    }
  };
  
  // Call greet method
  obj.greet(); 