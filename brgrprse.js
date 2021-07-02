const csv = require('csv-parser');
const fs = require('fs');


function readcsv(fname, make, read){
  var i = 0;
  var nodeindx = {};
  var whens = [];
  var brgrflow = {nodes:[], whens:[]};


  reader = fs.createReadStream(fname)
             .pipe(csv())
  reader.on('data', (row) => {
    nodeindx[row.target] = i;
    brgrflow.nodes.push({id: i, name: row.target});
    whens.push({targetname: row.target,
                sourcewords: row.when.replace(/[()]/g,'').split(' ')});
    i++;
  })
        .on('end', () => {make(nodeindx,whens,read)});
}

function makeflow(nodeindx, whens, write){
  var brgrflow = {nodes:[], links:[]};

  whens.forEach(function(job,i){
    brgrflow.nodes.push({id: i, name: job.targetname});
    job.sourcewords.forEach(function (word, index){
        switch(word){
          case 'EOJ':
            brgrflow.links.push({target: nodeindx[job.targetname],
                                 source: nodeindx[job.sourcewords[index+1]],
                                 type: 'EOJ'});
            break;
          case 'WEOJ':
            brgrflow.links.push({target: nodeindx[job.targetname],
                                 source: nodeindx[job.sourcewords[index+1]],
                                 type: 'WEOJ'});
            break;
          default:
            break;
        }
      })
  });
  write(brgrflow);
}

function writflow(brgrflow){
  console.log(brgrflow);
  fs.writeFile("brgrflow.json", JSON.stringify(brgrflow), function(err) {
      if (err) {
          console.log(err);
      }
  });
  console.log('written to brgrflow.json !!')
}

brgrflow = readcsv('brgrflow.csv',makeflow,writflow);
