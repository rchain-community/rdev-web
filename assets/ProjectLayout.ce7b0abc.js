import{p as l,q as m,r as b,t as o,u as s,v as A,w as T}from"./vendor.2d6b14af.js";import{$ as f,C as a}from"./CopyText.4e439696.js";/* empty css                                               */const n=l(import.meta.url,{modules:[{module:f,specifier:"../../components/CopyText.svelte"}],hydratedComponents:[a],hoisted:[]}),v=m(import.meta.url,"https://theoxd.github.io/rdev-web");b(async(t,i,r)=>{const d=t.createAstro(v,i,r),{project:e}=d.props,p=[{props:{"data-astro-id":"2T7Y76LA"},children:".Project.astro-2T7Y76LA{width:100%;}.DonateLabel.astro-2T7Y76LA{margin-bottom:0;margin-left:0.6em;}"}];for(const c of p)t.styles.add(c);return o`
<div class="col d-flex align-items-start shadow-sm astro-2T7Y76LA">
    <div class="Project astro-2T7Y76LA">
        ${s(t,r.title)}
        ${s(t,r.description)}
        ${e.donationRevAddr?o`<p class="DonateLabel astro-2T7Y76LA">Donate REV</p>${A(t,"CopyText",a,{text:e.donationRevAddr,"client:visible":!0,"client:component-path":n.getPath(a),"client:component-export":n.getExport(a),class:"astro-2T7Y76LA"})}`:null}


        ${e.url?o`<a class="btn btn-primary btn-margin astro-2T7Y76LA"${T(e.url,"href")} target="_blank" rel="noreferrer">Visit Project</a>`:o`<a class="btn disabled btn-primary btn-margin astro-2T7Y76LA">Coming soon</a>`}
    </div>
</div>

`});
