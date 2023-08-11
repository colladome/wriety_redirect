function findUrlParameter(parameterName) {
    let result = null;
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.has(parameterName)) {
      result = searchParams.get(parameterName);
    }
    return result;
  }
  
  function redirectToDesktop() {
    console.log('Tapped');
    const idToken = findUrlParameter("id_token");
    const accessToken = findUrlParameter("access_token");
    const appLinkScheme = "example-scheme";
    const appLinkAuthority = "com.colladome.wriety";
    const appLinkUrl = `${appLinkScheme}://${appLinkAuthority}/google-auth?id_token=${idToken}&access_token=${accessToken}`;
    setTimeout(() => {
        window.location.href = url;
    }, 100);
}


