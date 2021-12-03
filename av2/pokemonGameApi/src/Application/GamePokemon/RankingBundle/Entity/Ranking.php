<?php

namespace App\Application\GamePokemon\RankingBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Application\Sonata\MediaBundle\Entity\Gallery;
use App\Application\Sonata\MediaBundle\Entity\Media;
use Doctrine\Common\Collections\ArrayCollection;


use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * Ranking
 *
 * @ORM\Table(name="ranking")
 * @ORM\Entity(repositoryClass="App\Application\GamePokemon\RankingBundle\Repository\RankingRepository")
 * @UniqueEntity(fields={"usuario"}) 

 */

class Ranking
{
    /**
     * @var int  
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

        /**
         * One Ranking has One Usuario (Usuario).
         * @ORM\OneToOne(targetEntity="App\Application\GamePokemon\UsuarioBundle\Entity\Usuario", inversedBy="ranking")
         * @ORM\JoinColumn(name="usuario_id", referencedColumnName="id")
         */
        private $usuario;

    /**
     *
     * @ORM\Column(name="pontos", type="integer", nullable=true)
     */
    private $pontos = '0';

    /**
     *
     * @ORM\Column(name="acertos", type="integer", nullable=true)
     */
    private $acertos = '0';

    /**
     *
     * @ORM\Column(name="erros", type="integer", nullable=true)
     */
    private $erros = '0';

    /**
     *
     * @ORM\Column(name="jogosPulados", type="integer", nullable=true)
     */
    private $jogosPulados = '0';
    
    public function __construct() {
        
    }
         
    /**
     * @return int
     */
    public function getId(): ?int
    {
        return $this->id;
    }
    
    public function getStringId(): ?String
    {
        return (String) $this->id;
    }
    
   
   /**
    * @return mixed
    */
    public function getUsuario()
    {
        return $this->usuario;
    }
    
    /**
     * @param mixed $usuario
     */
    public function setUsuario($usuario): void
    {
        $this->usuario = $usuario;
    }
    
   
    public function getPontos()
    {
        return $this->pontos;
    }
    
    public function setPontos($pontos): void
    {
        $this->pontos = $pontos;
    }
    
   
    public function getAcertos()
    {
        return $this->acertos;
    }
    
    public function setAcertos($acertos): void
    {
        $this->acertos = $acertos;
    }
    
   
    public function getErros()
    {
        return $this->erros;
    }
    
    public function setErros($erros): void
    {
        $this->erros = $erros;
    }
    
   
    public function getJogosPulados()
    {
        return $this->jogosPulados;
    }
    
    public function setJogosPulados($jogosPulados): void
    {
        $this->jogosPulados = $jogosPulados;
    }
    }
