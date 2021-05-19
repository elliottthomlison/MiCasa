
 onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }
  // const { robots, searchfield } = this.state;
    const filteredhouses = properties.filter(property =>{
      return property.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !properties.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>MicasaFinds</h1>
          <SearchBox searchChange={this.onSearchChange}/>
        </div>
      );
      