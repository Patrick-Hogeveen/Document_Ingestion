
export const getData = async <T>(
    url: string,
    data: FormData,
    config: string
  )
  : Promise<T> => {
    
    console.log(data)
    console.log(config)
    const res = await fetch(url, {
      method: 'Post',
      headers: {
        'content-type': 'multipart/form-data',///'Content-type': config
      },
      body: data
    });

    return await res.json();
  }
  