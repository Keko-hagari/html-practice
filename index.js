
  const btn = document.querySelector(".a2")
  const settingBtn = document.querySelector(".a3")
  const mdl = document.querySelector(".modal")
  const settingMdl = document.querySelector(".settingModal")
  let isOpen = false
  btn.addEventListener("click", () =>  {
    if (!isOpen) {
      mdl.style.display="block"
      isOpen = true
    } else {
      mdl.style.display="none"
      isOpen = false
    }
  })
  settingBtn.addEventListener("click", () =>  {
    if (!isOpen) {
      settingMdl.style.display="block"
      isOpen = true
    } else {
      settingMdl.style.display="none"
      isOpen = false
    }
  })


  const asideBtn = document.querySelector(".asideBtn")
  const asideContainer = document.querySelector(".asideContainer")
  asideBtn.addEventListener("click", () => {
    asideContainer.innerHTML += `<aside>
    <img src="photo.png">
    <h1>Thumbail label</h1>
    <p>
      Cras justo odio, dapibus ac facilisis in, egestas <br>
      eget quam. Donec id elit non mi porta gravida <br>
      at eget metus. Nullam id dolor id nibh ultricies <br>
      vehicula ut id edit.
    </p>
  </aside>`
  })